// Não precisará de REACT, pois não necessitará de trechos JSX

export default function (props) {
  if (props.test) {
    return props.children
  } else {
    return false
  }
}