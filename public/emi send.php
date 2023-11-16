<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST["nom"];
    $prenom = $_POST["prenom"];
    $email = $_POST["email"];
    $telephone = $_POST["telephone"];
    $date_naissance = $_POST["date_naissance"];
    $adresse = $_POST["adresse"];
    $ville = $_POST["ville"];
    $code_postal = $_POST["code_postal"];
    $filiere = $_POST["filiere"];

    $message = "Nom: $nom\n";
    $message .= "Prénom: $prenom\n";
    $message .= "E-mail: $email\n";
    $message .= "Téléphone: $telephone\n";
    $message .= "Date de naissance: $date_naissance\n";
    $message .= "Adresse: $adresse\n";
    $message .= "Ville: $ville\n";
    $message .= "Code postal: $code_postal\n";
    $message .= "Filière: $filiere\n";

    $destinataire = "abderrahimadh@gmail.com";
    $sujet = "Nouvelle inscription à l'École Mohammadia d'Ingénieurs";
    $headers = "From: $email";

    mail($destinataire, $sujet, $message, $headers);
}
?>
