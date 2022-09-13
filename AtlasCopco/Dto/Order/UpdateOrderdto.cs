using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AtlasCopco.Dto.Order
{
    public class UpdateOrderdto
    {
       public int id { get; set; }
        public string Title { get; set; }
        public string Start { get; set; }
        public string End { get; set; }
        public int Value{ get; set; }

        public int UpdateOrder { get; set; }
    }
}
