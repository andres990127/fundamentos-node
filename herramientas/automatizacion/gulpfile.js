const gulp = require('gulp'); // Importamos gulp
const server = require('gulp-server-livereload'); // Importamos el creador de miniservers gulp

// Creamos una tarea la cual hace un console.log y termina despues de 1.2 segundos
// Ajustar script "build" en el package.json y ejecutar con "npm run build"
gulp.task('build', (cb)=>{
    console.log('Construyendo el sitio');
    setTimeout(cb, 1200);
});

// Creamos una tarea la cual crea un miniservidor web, lee un index.html y lo muestra
// Ajustar script "serve" en el package.json y ejecutar con "npm run serve"
gulp.task('serve', (cb)=>{
    gulp.src('WWW')
        .pipe(server({
            livereload: true,
            open: true,
        }));
});

// Creamos una tarea por defecto que me ejecute varias tareas de seguidas
// Ajustar script en el package.json y ejecutar con "npm run start"
gulp.task('default', gulp.series('build', 'serve'));