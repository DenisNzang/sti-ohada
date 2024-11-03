<?php include "header.html" ?>
    <div class="container">
        <table data-order='[[ 2, "asc" ]]' class="table table-striped display" id="articles_table" cellspacing="0" width="100%">
            <thead>
                <tr>
                    <th>Artículo</th>
                    <th>Texto</th>
                </tr>
            </thead>
            <tbody>
                <?php
                    $db = new SQLite3('db/ohada.db');
                    $articles = $db->query("SELECT * FROM article");
                    while ($article = $articles->fetchArray()) {
                        echo '<tr><td><strong>Art. '.$article['number'].'</strong></td>
                                    <td>'.$article['content'].'</td></tr>';
                    }
                ?>
            </tbody>
        </table>
    </div>
<?php include "footer.html" ?>

