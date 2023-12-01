import styles from './Button.module.scss';

export default function Button(props) {
  const buttonType = props.type;

  return (
    <button className={styles.button} type={buttonType} {...props}>
        {props.children}
    </button>
  )
}