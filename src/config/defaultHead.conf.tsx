import logo from '@assets/images/vite.svg'
import HeadProps from '@ctypes/headProps'

function getDefaultHead(): HeadProps {
  const host = import.meta.env.VITE_HOST
  const port = import.meta.env.VITE_PORT

  return {
    title: 'Vite + React + TS',
    image: logo,
    description: 'A little description',
    url: `http://${host}${port}`,
  }
}

export default getDefaultHead