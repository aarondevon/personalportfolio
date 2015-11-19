/**
 * Created by aaronsawyer on 11/19/15.
 */
module.exports = function(grunt) {

    grunt.initConfig({
        responsive_images: {
            dev: {
                options: {
                    engine: 'im',
                    sizes: [{
                        name: 'small',
                        width: '400px',
                        //suffix: '_small',
                        quality: 20
                    },{
                        name: 'medium',
                        width:'700px',
                        //suffix: '_med',
                        quality: 50

                    },{
                        name: 'large',
                        width: '1200px',
                        //suffix: '_large',
                        quality: 90
                    }]
                },
                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,jpeg,png}'],
                    cwd: 'src_images/',
                    dest: 'images/'
                }]
            }
        },

        /* Clear out the images directory if it exists */
        clean: {
            dev: {
                src: ['images'],
            },
        },

        /* Generate the images directory if it is missing */
        mkdir: {
            dev: {
                options: {
                    create: ['images']
                },
            },
        },

        /* Copy the "fixed" images that don't go through processing into the images/directory */
        copy: {
            dev: {
                files: [{
                    expand: true,
                    src: 'images_src/fixed/*.{gif,jpg,png}',
                    dest: 'images/'
                }]
            },
        },
    });

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);

};