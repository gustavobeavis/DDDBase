
import { blacklistRepository } from '../../../infrastructure/repositories/index'
import Controller from '../../common/controller'
import cpfValidator from '../validators/cpfValidator'
import { unmask } from '../transfoms/cpfTransform'

class checkBlacklist extends Controller {
  async verify (input, output) {
    const cpf = unmask(input.cpf)
    try {
      cpfValidator.validate(input.cpf)
      const cpfIsBlocked = !!await blacklistRepository.contains(cpf)

      return output.status(200).json({
        success: true,
        msg: `CPF is${cpfIsBlocked ? '' : "n't"} Blocked`,
        data: {
          isBlocked: cpfIsBlocked
        }
      })
    } catch (e) {
      let code = e.statusCode || 500

      return output.status(code).json({
        success: false,
        msg: 'Error on check blacklist',
        detail: e.message
      })
    }
  }
}

export default checkBlacklist
