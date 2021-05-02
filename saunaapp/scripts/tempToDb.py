from psycopg2 import connect, OperationalError
from readTemp import getTemperature
from database import DATABASES
from time import sleep


def connect_to_database(database):
    try:
        # Otwarcie połączenia do podanej bazy danych
        connection = connect(
            user=database['default']['USER'],
            password=database['default']['PASSWORD'],
            host=database['default']['HOST'],
            database=database['default']['NAME'],
        )
        # Ustawienie autocommita dla połączenia
        connection.autocommit = True
        # Zwrócenie obiektu odpowiedzialnego za połączenie
        return connection
    except OperationalError:  # Obługa błędu logowania
        print('Nie udało się połączyć z bazą danych!')
        return None  # Zwracanie None jak coś pójdzie nie tak


def create_cursor(database_connection):
    return database_connection.cursor()


def execute_sql(cursor, sql):
    """ funkcja wysyła polenie do bazy danych
    """
    try:
        cursor.execute(sql)  # Wykonanie polecenia SQL
    except Exception as error:  # Zwrócenie ewentualnego wyjątku z bazy
        print('Error type: {error_type}'.format(error_type=type(error)))
        print('Error msg: {error}'.format(error=error))


def database_connect(value_to_put):
    sql = value_to_put
    connection = connect_to_database(DATABASES)
    cursor = create_cursor(connection)
    execute_sql(cursor, sql)
    cursor.close()
    connection.close()


if __name__ == '__main__':

    sleep(5)
    try:
        database_connect(f"""DELETE FROM saunaapp_temp""")
    except Exception as error:
        print(error)

    while True:
        temp = getTemperature()
        database_connect(f"""INSERT INTO saunaapp_temp (temp) VALUES ({temp})""")
        sleep(10)
