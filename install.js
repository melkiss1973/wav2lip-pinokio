module.exports = {
  run: async ({ kernel }) => {
    // Mise à jour de pip
    await kernel.shell.run({
      message: "Updating pip",
      cmd: "pip install --upgrade pip"
    });

    // Installation des dépendances principales
    await kernel.shell.run({
      message: "Installing main dependencies",
      cmd: "pip install torch torchvision torchaudio numpy opencv-python librosa scipy"
    });

    // Installation des dépendances supplémentaires
    await kernel.shell.run({
      message: "Installing additional dependencies",
      cmd: "pip install face-alignment==1.3.5 ffmpeg-python==0.2.0 mediapipe==0.10.3 moviepy==1.0.3 numba==0.57.1 resampy==0.4.2 tqdm==4.66.1 yacs==0.1.8"
    });

    // Téléchargement du modèle pré-entraîné
    await kernel.shell.run({
      message: "Downloading pre-trained model",
      cmd: "mkdir -p Wav2Lip/checkpoints && wget 'https://github.com/Rudrabha/Wav2Lip/releases/download/v1.0/wav2lip.pth' -O Wav2Lip/checkpoints/wav2lip.pth"
    });

    console.log("Installation des dépendances Wav2Lip terminée !");
  }
};
