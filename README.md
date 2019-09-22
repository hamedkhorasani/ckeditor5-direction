# ckeditor5-direction
Add RTL/LTR Direction Toolbar to Ckeditor 5

<h2>Installation AND Usage:</h2>

1- clone and download <br>
2- unzip package to "ckeditor5-direction" folder <br>
3- copy "ckeditor5-direction" folder to "node_modules/@ckeditor" folder then run following command <br>
4- npm install --save ckeditor5-direction <br>
5- edit "src/ckeditor.js" and add following codes <br>
<pre>
  import Direction from '@ckeditor/ckeditor5-direction/src/direction'; 

  ClassicEditor.builtinPlugins = [
    TableToolbar,
    Direction 
  ];
  
  toolbar: {
    items: [
      'heading',
      '|',
      'direction',
    ]
  },
</pre>
<br>
6- save file <br>
7- run "yarn run build" <br>
8- "build/ckeditor.js" is ready


