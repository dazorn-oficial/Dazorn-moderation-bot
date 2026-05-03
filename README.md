<div align="center">
  <h1>🛡️ Dazorn Moderation Bot</h1>
  <p>Un bot de moderación avanzado y seguro construido con <a href="https://discord.js.org/">Discord.js v14</a>.</p>
  
  [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
  [![Discord.js](https://img.shields.io/badge/Discord.js-v14-blue.svg)](https://discord.js.org/)
  [![Node.js](https://img.shields.io/badge/Node.js-%3E%3D16.9.0-green.svg)](https://nodejs.org/)
  
  <p>
    <a href="#-características">Características</a> •
    <a href="#-instalación">Instalación</a> •
    <a href="#-uso-y-configuración">Configuración</a> •
    <a href="#-comandos">Comandos</a> •
    <a href="#-estructura-del-proyecto">Estructura</a> •
    <a href="#-contribución">Contribución</a>
  </p>
</div>

---

## ✨ Características

* **Sistema de Moderación Completo:** Comandos para banear, expulsar (kick) y aislar temporalmente (timeout) a usuarios problemáticos.
* **Gestión de Advertencias:** Sistema robusto para añadir advertencias (warns) a usuarios. Las advertencias quedan guardadas en el historial.
* **Limpieza de Canales:** Purga masiva de mensajes (clear) para mantener el chat limpio de spam o discusiones.
* **Soporte Dual de Comandos:** Soporta tanto comandos Slash (`/`) nativos como comandos de prefijo clásicos (`!`).
* **Datos en JSON Local:** No requiere bases de datos externas complicadas. Todo el historial de advertencias se almacena de forma segura en un archivo `warnings.json`.
* **Alta Seguridad:** Todos los comandos están rigurosamente protegidos verificando los permisos nativos de Discord de quien los ejecuta.

## 🚀 Instalación

Sigue estos pasos para instalar y ejecutar el bot de moderación en tu entorno:

1. **Clona el repositorio**
   ```bash
   gh repo clone dazorn-oficial/Dazorn-moderation-bot
   cd Dazorn-moderation-bot
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Configura el entorno**
   Crea un archivo `.env` en la raíz del proyecto y añade la siguiente información:
   ```env
   TOKEN=TU_TOKEN_DEL_BOT
   CLIENT_ID=ID_DE_LA_APLICACION_DEL_BOT
   GUILD_ID=ID_DE_TU_SERVIDOR
   PREFIX=!
   USE_SLASH=true
   USE_PREFIX=true
   ```

4. **Inicia el bot**
   ```bash
   npm start
   ```

## ⚙️ Uso y Configuración

* **Comandos Slash o Prefix:** Puedes decidir qué tipo de comandos deseas utilizar modificando las variables `USE_SLASH` y `USE_PREFIX` en el `.env`.
* **Datos de Advertencias:** Todos los historiales de `warns` se guardan en la carpeta `src/data/warnings.json`.

## 📝 Comandos

> **Nota:** Estos comandos están restringidos a usuarios con permisos de moderación (`Expulsar Miembros`, `Banear Miembros`, `Gestionar Mensajes`, etc.)

* `/ban <usuario> [razón]` o `!ban ...` - Banea permanentemente a un usuario del servidor.
* `/kick <usuario> [razón]` o `!kick ...` - Expulsa a un usuario del servidor (puede volver a entrar con invitación).
* `/timeout <usuario> <minutos>` o `!timeout ...` - Aísla temporalmente a un usuario impidiendo que hable o interactúe.
* `/warn <usuario> <razón>` o `!warn ...` - Añade una advertencia formal al usuario que se guardará en su historial.
* `/warnings <usuario>` o `!warnings ...` - Revisa el historial completo de advertencias de un usuario.
* `/clear <cantidad>` o `!clear ...` - Elimina un número exacto de mensajes (entre 1 y 100) del canal actual de forma instantánea.

## 📂 Estructura del Proyecto

```text
/
├── package.json
├── index.js              # Entry point del bot
├── README.md
└── src/
    ├── data/             # Almacenamiento local JSON
    │   └── warnings.json
    ├── utils/            # Utilidades generales
    │   └── db.js         # Handler de base de datos
    └── commands/         # Módulos de comandos
        ├── slash/        # Lógica de Slash Commands (/)
        └── prefix/       # Lógica de Message Commands (!)
```

## 🤝 Contribución

¡Las contribuciones y peticiones de funcionalidades son muy bienvenidas! 
Siéntete libre de clonar el código y enviar tus Pull Requests.

## 🐛 Bugs & Sugerencias

Si encuentras errores o quieres sugerir mejoras, hemos preparado plantillas estructuradas (Issue Templates) para que sea súper fácil y organizado.

Puedes abrir un issue seleccionando la opción adecuada a continuación:
* 🐛 **[Reportar un Error (Bug)](https://github.com/dazorn-oficial/Dazorn-moderation-bot/issues/new?template=bug_report.md)** — ¿Algo no funciona bien? ¡Cuéntanos!
* 💡 **[Sugerir una Funcionalidad](https://github.com/dazorn-oficial/Dazorn-moderation-bot/issues/new?template=feature_request.md)** — ¿Tienes una idea increíble? Nos encantaría leerla.

👉 **[Ver todos los Issues Activos](https://github.com/dazorn-oficial/Dazorn-moderation-bot/issues)**

## 💬 Contacto

Si tienes alguna duda más específica, necesitas ayuda para configurarlo, o simplemente quieres contactar conmigo para un bot personalizado, puedes hablarme por mensaje directo en Discord:

* **Discord:** `dazorn_oficial`

## ☕ Apoyo al Proyecto

Este bot se ha desarrollado con mucha dedicación y tiempo para garantizar la mejor experiencia de usuario posible y ofrecer un recurso de código abierto limpio y estructurado. Si este proyecto te ha resultado útil y deseas apoyar las horas invertidas en su creación, puedes considerar hacer una donación. 

No es obligatorio en absoluto, pero cualquier gesto es inmensamente apreciado y ayuda a mantener la motivación para futuras actualizaciones. ❤️

[<img src="https://img.shields.io/badge/Ko--fi-Apoyar_el_proyecto-FF5E5B?style=for-the-badge&logo=ko-fi&logoColor=white" alt="Ko-Fi" />](https://ko-fi.com/dazorn) 
[<img src="https://img.shields.io/badge/PayPal-Donar-00457C?style=for-the-badge&logo=paypal&logoColor=white" alt="PayPal" />](https://paypal.me/Danielzp24)

---
<div align="center">
  <i>"Si se puede pensar, se puede construir."</i><br>
  <b>Developed by Dazorn</b>
</div>