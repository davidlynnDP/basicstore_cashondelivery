import styles from './Footer.module.css'

const compoundCss = {
  pgCopyrightLight: `${ styles.pg_copyright } ${ styles.pg_copyright_light }`,
  pgCopyrightDark: `${ styles.pg_copyright }`,
}


export const Footer = () => {

    const year = new Date().getFullYear();

  return (
    <>

    <div className={ styles.ct_footer }>

      <h1 className={ compoundCss.pgCopyrightDark }>Todos los derechos reservados</h1>
      <h2 className={ compoundCss.pgCopyrightLight }>El contenido de este sitio web, incluyendo texto, imágenes, código y cualquier otro material, está protegido por derechos de autor. No se puede copiar, modificar, distribuir o utilizar de ninguna forma sin el permiso expreso del propietario.</h2>

      <div className={ styles.ct_copyright }>
        <img src="/icons/copyright.svg" alt="Copyright icon" className={ styles.copyright_img } />
        <p className={ styles.copyright_pg }>{ year } - Muebles Jireh</p>
      </div>   

    </div>
    </>
  )
}
