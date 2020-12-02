const rawData = `"姓名","電話"
"張小花",02-29879998
"吳阿寶",02-29871172
"陳天才",02-29679991`

const data = document.getElementById('data')

const rawDataArray = rawData.split('\n')

const titleArray = rawDataArray[0].replaceAll('"', '').split(',')

let dataDisplay = ''

let titleDisplay = ''

for (let i = 0; i < titleArray.length; i++) {
  titleDisplay += `<th>${titleArray[i]}</th>`
}

dataDisplay += `<thead><tr>${titleDisplay}</tr></thead>`

let bodyDisplay = ''

const studentArray = []

for (let i = 1; i < rawDataArray.length; i++) {
 
  const bodyArray = rawDataArray[i].replaceAll('"', '').split(',')

  console.log('bodyArray', bodyArray)

  const student = {
    name: bodyArray[0],
    tel: bodyArray[1],
      }

  studentArray.push(student)
}

for (let i = 0; i < studentArray.length; i++) {
  bodyDisplay += `<tr>
                    <td>${studentArray[i].name}</td>
                    <td>${studentArray[i].tel}</td>
                    
                  </tr>`
}


dataDisplay += `<tbody>${bodyDisplay}</tbody>`

data.innerHTML = dataDisplay
