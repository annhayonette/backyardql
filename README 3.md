# Backyard
Unholster Backyard site and resources

## Edición y actualización del sitio

Para actualizar los contenidos de Backyard se hace lo siguiente:

0. Instala hugo
    ```
    brew update
    brew install hugo
    ```

1. Clona este repo localmente

    ```
    git clone git@github.com:Unholster/backyard
    ```

2. Dentro del directorio `backyard/hugo` ejecuta el servidor de desarrollo:

    ```
    $ cd backyard/hugo
    $ hugo server -D
    Started building sites ...
    Built site for language en:
    0 draft content
    0 future content
    0 expired content
    1 regular pages created
    6 other pages created
    0 non-page files copied
    1 paginator pages created
    0 tags created
    0 categories created
    total in 4 ms
    Watching for changes in /Users/sebastian/code/unholster/backyard/hugo/{data,content,layouts,static,themes}
    Serving pages from memory
    Web Server is available at http://localhost:1313/ (bind address 127.0.0.1)
    Press Ctrl+C to stop
    ```

3. Accede al sitio local de desarrollo en `http://localhost:1313`

4. Edita los contenidos (archivos Markdown) bajo `backyard/hugo/content`

5. El sitio local de desarrollo cuenta con LiveReload para ir viendo los cambios en tiempo real

6. Concluido los cambios deseados, recompila el sitio corriendo el comando `hugo` sin parámetros

    ```
    $ hugo
    Started building sites ...
    Built site for language en:
    0 draft content
    0 future content
    0 expired content
    1 regular pages created
    6 other pages created
    0 non-page files copied
    1 paginator pages created
    0 categories created
    0 tags created
    total in 6 ms
    ```

7. Haz commit de tu trabajo y empuja a una rama propia de desarrollo. El commit debiese incluir los cambios bajo los directorios `hugo` que realizaste a mano y también los cambios bajo `wiki` con el sitio compilado.

8. Crea un Pull Request y asigna un reviewer
