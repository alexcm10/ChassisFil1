<?php
// Script de traitement du formulaire de contact
header('Content-Type: application/json');

// Vérifier si c'est une requête POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée']);
    exit;
}

// Récupérer les données du formulaire
$nom = isset($_POST['nom']) ? trim($_POST['nom']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$telephone = isset($_POST['tel']) ? trim($_POST['tel']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

// Validation des champs obligatoires
if (empty($nom) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Tous les champs obligatoires doivent être remplis']);
    exit;
}

// Validation de l'email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Adresse email invalide']);
    exit;
}

// Configuration de l'email
$to = 'Chassisfil@gmail.com';
$subject = 'Nouveau message de contact - ChâssisFil';

// Construction du contenu de l'email
$emailContent = "Nom : " . htmlspecialchars($nom) . "\n";
$emailContent .= "Email : " . htmlspecialchars($email) . "\n";
$emailContent .= "Téléphone : " . htmlspecialchars($telephone) . "\n";
$emailContent .= "Message :\n" . htmlspecialchars($message) . "\n";

// Headers de l'email
$headers = array();
$headers[] = 'From: noreply@chassisfil.be';
$headers[] = 'Reply-To: ' . $email;
$headers[] = 'X-Mailer: PHP/' . phpversion();
$headers[] = 'Content-Type: text/plain; charset=UTF-8';

// Envoi de l'email
$mailSent = mail($to, $subject, $emailContent, implode("\r\n", $headers));

if ($mailSent) {
    // Email de confirmation à l'expéditeur
    $confirmationSubject = 'Confirmation de votre message - ChâssisFil';
    $confirmationContent = "Bonjour " . htmlspecialchars($nom) . ",\n\n";
    $confirmationContent .= "Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.\n\n";
    $confirmationContent .= "Récapitulatif de votre message :\n";
    $confirmationContent .= "Message : " . htmlspecialchars($message) . "\n\n";
    $confirmationContent .= "Cordialement,\n";
    $confirmationContent .= "L'équipe ChâssisFil\n";
    $confirmationContent .= "Tél : 0470/015870\n";
    $confirmationContent .= "Email : Chassisfil@gmail.com";
    
    $confirmationHeaders = array();
    $confirmationHeaders[] = 'From: Chassisfil@gmail.com';
    $confirmationHeaders[] = 'Content-Type: text/plain; charset=UTF-8';
    
    mail($email, $confirmationSubject, $confirmationContent, implode("\r\n", $confirmationHeaders));
    
    echo json_encode(['success' => true, 'message' => 'Votre message a été envoyé avec succès ! Nous vous répondrons rapidement.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Erreur lors de l\'envoi du message. Veuillez réessayer ou nous contacter directement.']);
}
?>
