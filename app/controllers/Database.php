<?php

    class Database {

        private $host = DB_HOST;
        private $dbname = DB_NAME;
        private $dbuser = DB_USER;
        private $dbpass = DB_PASS;

        public function connect()
        {
            $dsn = 'msql:host=' . $this->host . ';dbname=' . $this->dbname;

            try {
                $connect = new PDO($dsn, $this->dbuser, $this->dbpass);
            } catch (PDOException $e) {
                echo "Database Connection Failed!" . $e->getMessage();
            }
        }

    }