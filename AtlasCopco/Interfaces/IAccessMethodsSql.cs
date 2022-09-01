using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AtlasCopco.Interfaces
{
   public interface IAccessMethodsSql
   {
        List<T> GetListDatasFromSQL<T>(string query);
        Task<int> CrudDataToSql(string query);
   }
}
