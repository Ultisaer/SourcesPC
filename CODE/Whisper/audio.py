import whisper

model = whisper.load_model("medium")
result = model.transcribe("audio.py")
print(result["text"])