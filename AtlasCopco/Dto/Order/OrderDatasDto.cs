﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AtlasCopco.Dto.Order
{
    public  class OrderDatasDto
    {
        public int id { get; set; }
        public string title { get; set; }
        public string start  { get; set; }

        public string end { get; set; }

        public string backGroundColor  { get; set; }
        //public DateTime FechaFin { get; set; }
    }
}
