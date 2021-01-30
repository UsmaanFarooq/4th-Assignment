
//ticket-count.......................
function ticketChange(ticket, isIncrease) {
    ticketInput = document.getElementById(ticket + '-count');
    ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;
    ticketCost();
}
//ticket-cost.........................
function ticketCost(){
    const firstClassTicketInput = document.getElementById
('firstClassTicket-count');
    const firstClassTicketCount = parseInt(firstClassTicketInput.value);
    const economyTicketInput = document.getElementById
('economyTicket-count');
    const economyTicketCount = parseInt(economyTicketInput.value);
    const totalTicketCost = firstClassTicketCount * 150 + economyTicketCount * 100;
    document.getElementById('sub-total').innerText = totalTicketCost;
    const tax = Math.round(totalTicketCost / 10);
    document.getElementById('tax-amount').innerText = tax;
    const total = totalTicketCost + tax;
    document.getElementById('total-amount').innerText = total;
    const totalCostReceipt = total;
    document.getElementById('totalCost-receipt').innerText =  '$' + totalCostReceipt;
}
//booking-page............................
const bookNowBtn = document.getElementById('bookNow-btn').
addEventListener('click', function (){
    alert('Are you sure you want to book this ticket?')
    const selectionSection = document.getElementById('selection-section');
    selectionSection.style.display = 'none'
    const receiptArea = document.getElementById('receipt-area');
    receiptArea.style.display = 'block';
})



 
 
 
 
