import HeadProps from '@ctypes/headProps'

function getDefaultHead(): HeadProps {
  const host = import.meta.env.VITE_HOST
  const port = import.meta.env.VITE_PORT

  return {
    title: 'Phasmo Helper',
    image: '',
    description: '',
    url: `http://${host}${port}`,
  }
}

export default getDefaultHead