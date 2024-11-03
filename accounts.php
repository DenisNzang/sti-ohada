<?php include "header.html" ?>
    <div class="container">
        <table data-order='[[ 2, "asc" ]]' class="table display" id="accounts_table" cellspacing="0" width="100%">
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Descripción</th>
                </tr>
            </thead>
            <tbody>
                <?php
                    $db = new SQLite3('db/ohada.db');
                    $accounts = $db->query("SELECT * FROM account ORDER BY id");
                    while ($account = $accounts->fetchArray()) {
                        if($account['code'] < 10) {
                            echo '<tr><td><h1>' . $account['code'] . '</h1></td><td><h1>' . $account['description'] . '</h1></td></tr>';
                        }
                        elseif($account['code'] < 100) {
                            echo '<tr><td><h3>' . $account['code'] . '</h3></td><td><h3>' . $account['description'] . '</h3></td></tr>';
                        }
                        elseif($account['code'] < 1000) {
                            echo '<tr><td><h5>' . $account['code'] . '</h5></td><td><h5>' . $account['description'] . '</h5></td></tr>';
                        }
                        else {
                            echo '<tr><td>' . $account['code'] . ' </td><td>' . $account['description'] . '</td></tr>';
                        }
                    }
                ?>
            </tbody>
        </table>
    </div>
<?php include "footer.html" ?>

