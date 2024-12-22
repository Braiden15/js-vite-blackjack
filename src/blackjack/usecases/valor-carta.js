
/**
 * Obtener el valor de la carta
 * @param {<Array><String>} carta 
 * @returns {Number} valor de la carta
 */

export const valorCarta = ( carta ) => {

    if ( !carta ) throw new Error('Carta debe existir');

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}