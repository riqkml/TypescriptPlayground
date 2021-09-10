//enum

// numeric enum
enum Month {
  JAN,
  FEB,
  MAR,
  APR,
  MAY,
}
enum nameMonth {
  JAN = "Januari",
  FEB = "Februari",
  MAR = "Maret",
  APR = "April",
  MAY = "Mei",
}

console.log(`index ke ${Month.JAN} adalah bulan ${nameMonth.JAN}`);
