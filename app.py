from flask import Flask, render_template
from datetime import datetime

app = Flask(__name__)
app.config['RESOURCES_FOLDER'] = 'resources'

# Ruta para cargar la página de inicio
@app.route('/home')
def home():
    current_year = datetime.now().year  # Obtiene el año actual
    return render_template('index.html', year=current_year)
# Ruta para cargar la sección de proyectos
@app.route('/proyectos')
def proyectos():
    return render_template('proyectos.html')

# Ruta para cargar la página de contacto
@app.route('/contacto')
def contacto():
    return render_template('contacto.html')

#pagina de servicios
@app.route('/services')
def services():
    return render_template('services.html')



# Ruta para cargar la página principal
@app.route('/')
def index():
    current_year = datetime.now().year  # Obtiene el año actual
    return render_template('index.html', year=current_year)


if __name__ == '__main__':
    app.run(debug=True)
