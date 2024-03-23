const time = '2024-03-16T02:28:31Z'; // Replace with your actual timestamp
const formattedDate = moment(time).format('MMMM D, YYYY h:mm A'); // Format the date as desired

$('.entry-results .local').html(formattedDate);
