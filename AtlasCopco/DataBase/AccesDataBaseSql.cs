using AtlasCopco.Interfaces;
using System.Data;
using System.Data.SqlClient;
using System.Reflection;

namespace AtlasCopco.DataBase
{
    public class AccesDataBaseSql : IAccessMethodsSql
    {
        private SqlConnection _SqlConnection;
        private string _conectionString = "Data Source=IBLAESBARC00789;Initial Catalog=NetCorePruevaAxel;Integrated Security = True";

        public AccesDataBaseSql()
        {
            _SqlConnection = new SqlConnection(_conectionString);
        }

        public List<T> GetListDatasFromSQL<T>(string query)
        {
            DataTable table = new DataTable();
            List<Dictionary<string, object>> rows = new List<Dictionary<string, object>>();
            string sqlDataSource = query;
            List<T> data = new List<T>();
            try
            {
                _SqlConnection.Open();

                SqlDataReader myReader;
                SqlCommand myCommand = new SqlCommand();
                myCommand.CommandText = query;
                myCommand.Connection = _SqlConnection;
                myReader = myCommand.ExecuteReader();
                table.Load(myReader);

                myReader.Close();
                _SqlConnection.Close();

                foreach (DataRow row in table.Rows)
                {
                    T item = GetItem<T>(row);
                    data.Add(item);
                }
                
            }
            catch (Exception ex)
            {
                string exception = ex.ToString();
            }

            return data;
        }


        public static T GetItem<T>(DataRow dr)
        {
            Type temp = typeof(T);
            T obj = Activator.CreateInstance<T>();

            foreach (DataColumn column in dr.Table.Columns)
            {
                foreach (PropertyInfo pro in temp.GetProperties())
                {
                    if (pro.Name == column.ColumnName)
                        pro.SetValue(obj, dr[column.ColumnName], null);
                    else
                        continue;
                }
            }
            return obj;
        }

        public async Task<int> CrudDataToSql(string query)
        {
            DataTable table = new DataTable();
            int rowsAffected = 0;
            string sqlDataSource = _conectionString;
            using (SqlConnection connexion = new SqlConnection(sqlDataSource))
            {
                using (SqlCommand cmd = new SqlCommand(query, connexion))
                {
                    cmd.CommandType = CommandType.Text;
                    await connexion.OpenAsync();
                    rowsAffected = Convert.ToInt32(cmd.ExecuteNonQuery());
                    await connexion.CloseAsync();
                }
            }
            return rowsAffected;
        }

        public async Task<int> CrudDataToSqlReturnId(string query)
        {
            DataTable table = new DataTable();
            int rowsAffected = 0;
            string sqlDataSource = _conectionString;
            using (SqlConnection connexion = new SqlConnection(sqlDataSource))
            {
                using (SqlCommand cmd = new SqlCommand(query, connexion))
                {
                    cmd.CommandType = CommandType.Text;
                    await connexion.OpenAsync();
                    rowsAffected = Convert.ToInt32(cmd.ExecuteScalar());
                    await connexion.CloseAsync();
                }
            }
            return rowsAffected;
        }

    }
}