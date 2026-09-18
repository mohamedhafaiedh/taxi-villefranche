import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log("Nouvelle demande de réservation VTC reçue:", data);

    // Retourner un statut de succès
    return NextResponse.json({
      success: true,
      message: "Votre demande de réservation a été enregistrée avec succès. Nous vous contacterons dans les plus brefs délais.",
      receivedData: data,
    });
  } catch (error) {
    console.error("Erreur API Contact:", error);
    return NextResponse.json(
      { success: false, message: "Une erreur est survenue lors de l'envoi de votre demande." },
      { status: 500 }
    );
  }
}
