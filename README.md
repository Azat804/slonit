## Основной перечень команд GIT
![](https://res.infoq.com/news/2021/03/git-clone-vulnerability/en/headerimage/git-clone-vulnerability-1615652294856.jpg)

1. Конфигурация Git

   - **git config --global user.name "username"** - задает имя пользователя
   ```git
   git config --global user.name "username"
   ```
   - **git config --global user.email "e-mail"** - задает электронную почту
   ```git
   git config --global user.email "e-mail"
   ```
2. Инициализация репозитория
   - **git init** - создает репозиторий в текущем каталоге
   ```git
   git init
   ```
3. Добавление/удаление/переименование файлов
   
   - **git add .** - добавляет все файлы и каталоги в index
   ```git
   git add .
   ```
   - **git add имя_файла** - добавляет файл в index
   ```git
   git add имя_файла
   ```
   - **git rm имя_файла** - удаляет файл из рабочей директории и из index
   ```git
   git rm имя_файла
   ```
   - **git mv старое_имя_файла новое_имя_файла** - Переименовывет файл в рабочей директории и в index
   ```git
   git mv старое_имя_файла новое_имя_файла
   ```
4. Коммиты

   - **git commit -m "message"** - Создает коммит с однострочным сообщением
   ```git
   git commit -m "message"
   ```
   - **git commit** - Создает коммит с многострочным сообщением
   ```git
   git commit
   ```
   - **git commit -- amend** - Изменяет последний коммит
   ```git
   git commit -- amend
   ```
    - **git show** - Просмотр последнего коммита
   ```git
   git show
   ```
   - **git log** - просмотр списка последних коммитов
   ```git
   git log
   ```
   - **git commit -am "message"** - добавляет все файлы и каталоги в index и создает коммит
   ```git
   git commit -am "message"
   ```
   - **git reset HEAD имя_файла** - удаляет файл из index
   ```git
   git reset HEAD имя_файла
   ```

5. Ветки
   
   - **git branch новая_ветка** - создает новую ветку
   ```git
   git branch новая_ветка
   ```
   - **git checkout -b новая_ветка** - создает новую ветку и перекулючается на нее
   ```git
   git checkout -b новая_ветка
   ```
    - **git branch -D имя_существующей_ветки** - удаляет существующую ветку
   ```git
   git branch -D имя_существующей_ветки
   ```
   - **git branch** - просмотр списка веток
   ```git
   git branch
   ```
6. Взаимодействие с удаленным репозиторием
   
   - **git remote add origin https[]()://github.com/...** - добавляет удаленный репозиторий
   ```git
   git remote add origin https[]()://github.com/...
   ```
    - **git clone https[]()://github.com/...** - создает копию существующего репозитория
   ```git
   git clone https[]()://github.com/...
   ```
   - **git push origin main** - отправляет изменения в удаленный репозиторий
   ```git
   git push origin main
   ```
   - **git pull** - получает изменения из удаленного репозитория
   ```git
   git pull
   ```
Более подробный перечень команд Git представлен [здесь](https://git-scm.com/doc)

      
   
   
