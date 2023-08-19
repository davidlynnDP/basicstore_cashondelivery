import styles from './LineSeparator.module.css'


interface LineSeparatorProps {
    shadowDown?: boolean, //false por defecto
} 

export const LineSeparator = ({ shadowDown }: LineSeparatorProps) => {

    const css = `${ styles.line_rule } ${ shadowDown ? styles.down : styles.up }`;

  return (
    <div className={ css }>
        <img src="/icons/diamond.svg" alt="Diamond icon" className={ styles.diamond } />
    </div>
  )
}
