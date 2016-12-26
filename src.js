import { ExtrudeGeometry } from './ExtrudeGeometry';


import { Geometry } from '../core/Geometry';

function TextGeometry( text, parameters ) {

	parameters = parameters || {};

	var font = parameters.font;

	if ( (font && font.isFont) === false ) {

		console.error( 'THREE.TextGeometry: font parameter is not an instance of THREE.Font.' );
		return new Geometry();

	}

	var shapes = font.generateShapes( text, parameters.size, parameters.curveSegments );

	// translate parameters to ExtrudeGeometry API

	parameters.amount = parameters.height !== undefined ? parameters.height : 50;

	// defaults

	if ( parameters.bevelThickness === undefined ) parameters.bevelThickness = 10;
	if ( parameters.bevelSize === undefined ) parameters.bevelSize = 8;
	if ( parameters.bevelEnabled === undefined ) parameters.bevelEnabled = false;

	ExtrudeGeometry.call( this, shapes, parameters );

	this.type = ' MERRY CHIRSTMAS';

}

TextGeometry.prototype = Object.create( ExtrudeGeometry.prototype );
TextGeometry.prototype.constructor = TextGeometry;


export { TextGeometry };
