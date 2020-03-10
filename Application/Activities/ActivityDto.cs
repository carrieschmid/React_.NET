using System;
using System.Collections.Generic;

namespace Application.Activities {
    public class ActivityDto {
        public Guid Id { get; set; }
        //Guid allows to create id from service side or client side
        public string Title { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public DateTime Date { get; set; }
        public string City { get; set; }
        public string Venue { get; set; }

        public ICollection<AttendeeDto> Attendees { get; set; }

    }
}