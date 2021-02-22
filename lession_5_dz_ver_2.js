CreateTable();
updateRow('G5');
updateRow('B1');

function CreateTable(){
            var poz = document.getElementById('space');

            tab = document.createElement('table');
            poz.appendChild(tab);

            tab.border = '5';

            for (var i = 0; i < 8; i++){
                var row = tab.insertRow(i);

                for(var j = 0; j < 8; j++){
                    var cell = row.insertCell(j);
                    var idStr = String.fromCharCode(97 + i).toUpperCase() + (j+1);
                    cell.innerHTML = idStr;
                    //cell.innerHTML = '\u2656';
                    cell.id = idStr;
                    cell.style.backgroundColor = 'grey';
                    cell.style.color = 'white';
                    cell.style.height = '50px';
                    cell.style.width = '50px';

                };
            };

        }

function updateRow(idStr)
{
    cell =  document.getElementById(idStr);
    if(cell != null)
    {
        cell.innerHTML = '\u2656';
        cell.style.backgroundColor = 'green';
    }
}
