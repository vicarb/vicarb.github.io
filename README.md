# Página de presentación

Página personal en Next.js, React y TypeScript. Exportación estática, sin base de datos ni servicios de pago.

## Desarrollo

```sh
npm ci
npm run dev
```

## Datos de contacto

Editar `app/site.ts`: nombre, correo, WhatsApp (con código de país) y LinkedIn. Mientras no exista un correo o WhatsApp configurado, la sección de contacto indica que estará disponible próximamente. No hay formulario que simule envíos.

## Verificación

```sh
npm run build
npm run typecheck
```

La compilación genera `out/`. Las tipografías tienen alternativas de sistema si Google Fonts no está disponible.

## Publicación posterior

**Vercel:** importar este directorio como proyecto Next.js; comando `npm run build`, salida estática `out`. No requiere variables de entorno.

**GitHub Pages:** ejecutar `NEXT_PUBLIC_BASE_PATH=/nombre-del-repositorio npm run build` y publicar el contenido de `out/` mediante GitHub Actions. Para un dominio propio o repositorio `usuario.github.io`, omitir `NEXT_PUBLIC_BASE_PATH`. Añadir un archivo `.nojekyll` en el directorio publicado si se publica desde una rama.

Antes de publicar, confirmar nombre, canal de contacto y descripción de experiencia. La página no contiene cifras de ahorro, clientes o testimonios inventados.
