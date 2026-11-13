# Publicar el sitio

Paso a paso para dejar el sitio en línea con todo a nombre de la clienta. Se hace junto con ella (necesita su correo para confirmar cuentas). Tiempo aproximado: una hora, sin contar el dominio.

Todo lo que se cree aquí se anota en `FICHA.md`, tabla "Cuentas y servicios".

## 1. Cuenta de GitHub de la clienta

1. En [github.com](https://github.com), "Sign up" con el correo de la clienta. Contraseña guardada en un gestor (Bitwarden), no en papel ni WhatsApp.
2. Activar la verificación en dos pasos: Settings → Password and authentication → Two-factor authentication.
3. Crear el repositorio: botón "New", nombre `despacho-robles`, **Private**, sin README (el proyecto ya tiene uno).
4. Agregar al desarrollador como colaborador: Settings → Collaborators → Add people → usuario de GitHub de iztac web. El desarrollador acepta la invitación desde su correo.

## 2. Subir el código

Desde la computadora del desarrollador, en la carpeta del proyecto:

```bash
git init
git add .
git commit -m "Sitio inicial"
git branch -M main
git remote add origin https://github.com/USUARIO-DE-LA-CLIENTA/despacho-robles.git
git push -u origin main
```

Si Git pide credenciales, se usan las del desarrollador (ya es colaborador).

## 3. Cuenta de Netlify de la clienta

1. En [app.netlify.com](https://app.netlify.com), "Sign up" **con GitHub**, usando la sesión de GitHub de la clienta. Así Netlify ya puede ver su repositorio.
2. "Add new project" → "Import an existing project" → GitHub → elegir `despacho-robles`.
3. Netlify detecta Next.js solo. Dejar la configuración por defecto (build `npm run build`). Deploy.
4. En uno o dos minutos el sitio queda en una dirección tipo `nombre-aleatorio.netlify.app`. Cambiar el nombre: Site configuration → Site details → Change site name (por ejemplo `robles-delgado`).
5. Activar 2FA en Netlify: User settings → Security.
6. Quitar la insignia de Netlify si aparece: Site configuration → General → Powered by Netlify badge.

Desde aquí, **cada `git push` a `main` publica solo**. El desarrollador no necesita entrar a Netlify.

## 4. Dominio

1. Elegir nombre con la clienta (ver `FICHA.md`). Buscar disponibilidad.
2. Comprar en un registrador independiente, **con la cuenta y la tarjeta de la clienta**: [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/) (precio de costo) o Namecheap. Para `.mx`, un registrador autorizado como Akky.
3. Activar renovación automática y bloqueo de transferencia. Activar protección de datos del titular si la ofrece.
4. En Netlify: Domain management → Add a domain → escribir el dominio. Netlify muestra los registros DNS que hay que crear.
5. En el registrador, crear esos registros (normalmente un `A` o `ALIAS` para el dominio raíz y un `CNAME` para `www`). Esperar a que propague (minutos a horas).
6. En Netlify, confirmar que HTTPS quedó activo (Let's Encrypt, automático) y que `www` y sin `www` llevan a la misma versión.
7. Cambiar `url` en `data/site.ts` al dominio definitivo y hacer push.

## 5. Después de publicar

- [ ] Abrir el sitio real en celular y computadora; tocar el botón de WhatsApp y verificar que abre el chat con el mensaje.
- [ ] [Google Search Console](https://search.google.com/search-console): propiedad tipo "Dominio" con la cuenta de Google de la clienta; enviar `https://DOMINIO/sitemap.xml`.
- [ ] Perfil de Negocio de Google: crear o actualizar con el enlace del sitio.
- [ ] Poner el enlace en WhatsApp Business y en la firma de correo de la clienta.
- [ ] Monitoreo de caídas (UptimeRobot, gratis) con el correo de la clienta.
- [ ] Entregar hoja de accesos (gestor de contraseñas), hoja de DNS y acta de entrega.
- [ ] Anotar la fecha de renovación del dominio en `FICHA.md`.

## Si algo falla

- **El build falla en Netlify pero no en tu computadora**: revisa la versión de Node en Netlify (Site configuration → Build & deploy → Environment → `NODE_VERSION` = `20`).
- **Cambios que no aparecen**: Deploys → ver el último deploy; si está en "Failed", abrir el log.
- **El dominio no carga**: Domain management muestra el estado de cada registro DNS; suele ser un registro mal copiado o propagación pendiente.
