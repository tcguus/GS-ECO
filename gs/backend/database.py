import oracledb

def get_db_connection():
    connection = oracledb.connect(
        user="rm555562",
        password="150106",
        dsn="oracle.fiap.com.br/orcl"
    )
    return connection