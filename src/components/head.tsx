import getDefaultHead from "@config/defaultHead.conf"
import HeadProps from "@ctypes/headProps"
import { Helmet } from "react-helmet-async"

function Head({ title, image, description, url }: HeadProps) {
  const defaults = getDefaultHead()
  return (
    <Helmet>
      <meta property="og:title" content={title ? title : defaults.title} />
      <meta property="og:image" content={image ? image : defaults.image} />
      <meta property="og:description" content={description ? description : defaults.description} />
      <meta property="og:url" content={url ? `${defaults.url}${url}` : defaults.url} />
      <title>{title ? title : defaults.title}</title>
    </Helmet>
  )
}

export default Head