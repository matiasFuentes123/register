import { authErrorCodes } from "../../../models/authErrorCodes";
/**
 * Sirve para traducir los errores de firebase Authentication 
 * @param error 
 * @returns un string con el error traducido
 */
export const mapedAuthError = (error: any) => {
  if (error.code) {
    if (error.code === authErrorCodes.INVALID_EMAIL) {
      return "Error correo inválido.";
    }
    if (error.code === authErrorCodes.INVALID_PASSWORD) {
      return "Error contraseña incorrecta o email inválido.";
    }
    if (error.code === authErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER) {
      return "Demsiados intentos fallidos, intente más tarde.";
    }
    if (error.code === authErrorCodes.USER_DELETED) {
      return "Usuario no existe";
    }
    if (error.code === authErrorCodes.USER_DISABLED) {
      return "Usuario ha sido deshabilitado";
    }
    if (error.code === authErrorCodes.EMAIL_EXISTS) {
      return "Este email ya esta registrado.";
    }
  }
  return "Error desconocido intente mas tarde.";
};
