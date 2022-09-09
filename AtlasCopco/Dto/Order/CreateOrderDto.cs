using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AtlasCopco.Dto.Order
{
    public class CreateOrderDto
    {
        public string title { get; set; }
        public string start { get; set; }
        public string End { get; set; }
        public int Value { get; set; }
        public int createdOrder { get; set; }
    }
}
