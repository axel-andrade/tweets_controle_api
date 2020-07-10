import fs from 'fs'
import { removeExtensionFromFile } from '../../../../utils/helpers'
const modelsPath = `${__dirname}/`

export default () => {
  fs.readdirSync(modelsPath).filter(file => {
    const modelFile = removeExtensionFromFile(file)
    return modelFile !== 'index' ? require(`./${modelFile}`) : ''
  })
}
