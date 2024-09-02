const dateMod = () => {
    let data = document.querySelector("#input").value;

    let sperator = '/'

    let dateArr = data.trim().split("\n")
    // dateArr
    let modifiedDate =``
    dateArr.forEach((item, index) => {
    // console.log(item)
    parts = item.split(sperator)
    modifiedDate += `${parts[1]}/${parts[0]}/${parts[2]}\n`
    })

    // console.log(modifiedDate)
    document.querySelector("#output").value = modifiedDate
}


const clipboard = FlowbiteInstances.getInstance('CopyClipboard', 'output');
const tooltip = FlowbiteInstances.getInstance('Tooltip', 'tooltip-copy-output');

const $defaultIcon = document.getElementById('default-icon');
const $successIcon = document.getElementById('success-icon');

const $defaultTooltipMessage = document.getElementById('default-tooltip-message');
const $successTooltipMessage = document.getElementById('success-tooltip-message');

clipboard.updateOnCopyCallback((clipboard) => {
    showSuccess();

    // reset to default state
    setTimeout(() => {
        resetToDefault();
    }, 2000);
})

const showSuccess = () => {
    $defaultIcon.classList.add('hidden');
    $successIcon.classList.remove('hidden');
    $defaultTooltipMessage.classList.add('hidden');
    $successTooltipMessage.classList.remove('hidden');    
    tooltip.show();
}

const resetToDefault = () => {
    $defaultIcon.classList.remove('hidden');
    $successIcon.classList.add('hidden');
    $defaultTooltipMessage.classList.remove('hidden');
    $successTooltipMessage.classList.add('hidden');
    tooltip.hide();
}
