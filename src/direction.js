/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module direction/direction
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import DirectionEditing from './directionediting';
import DirectionUI from './directionui';

/**
 * The text direction plugin.
 *
 * For a detailed overview, check the {@glink features/text-direction Text direction feature documentation}
 * and the {@glink api/direction package page}.
 *
 * This is a "glue" plugin which loads the {@link module:direction/directionediting~DirectionEditing} and
 * {@link module:direction/directionui~DirectionUI} plugins.
 *
 * @extends module:core/plugin~Plugin
 */
export default class Direction extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ DirectionEditing, DirectionUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'Direction';
	}
}

/**
 * The configuration of the {@link module:direction/direction~Direction direction feature}.
 *
 * Read more in {@link module:direction/direction~DirectionConfig}.
 *
 * @member {module:direction/direction~DirectionConfig} module:core/editor/editorconfig~EditorConfig#direction
 */

/**
 * The configuration of the {@link module:direction/direction~Direction direction feature}.
 *
 *		ClassicEditor
 *			.create( editorElement, {
 *				direction: {
 *					options: [ 'left', 'right' ]
 *				}
 *			} )
 *			.then( ... )
 *			.catch( ... );
 *
 * See {@link module:core/editor/editorconfig~EditorConfig all editor configuration options}.
 *
 * @interface DirectionConfig
 */

/**
 * Available direction options.
 *
 * The available options are: `'left'`, `'right'`, `'center'` and `'justify'`. Other values are ignored.
 *
 * **Note:** It is recommended to always use `'left'` or `'right'` as these are default values which the user should
 * normally be able to choose depending on the
 * {@glink features/ui-language#setting-the-language-of-the-content language of the editor content}.
 *
 *		ClassicEditor
 *			.create( editorElement, {
 *				direction: {
 *					options: [ 'left', 'right' ]
 *				}
 *			} )
 *			.then( ... )
 *			.catch( ... );
 *
 * See the demo of {@glink features/text-direction#configuring-direction-options custom direction options}.
 *
 * @member {Array.<String>} module:direction/direction~DirectionConfig#options
 */
