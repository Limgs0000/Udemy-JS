const ATTACK_VALUE = 10; //하드코딩한 전역 값은 대문자로 쓰며 단어 구분은 _를 이용하는 관례가 있음.
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;

let chosenMaxLife = 5;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damage;
    const monsterDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= monsterDamage;

    if(currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won!');
    } else if(currentPlayerHealth <= 0 && currentMonsterHealth >0) {
        alert('You lost!');
    } else if(currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('You have a draw!');
    }
}

function strongAttackHandler() {
    const damage = dealMonsterDamage(STRONG_ATTACK_VALUE);
    currentMonsterHealth -= damage;
    const monsterDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= monsterDamage;

    if(currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won!');
    } else if(currentPlayerHealth <= 0 && currentMonsterHealth >0) {
        alert('You lost!');
    } else if(currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('You have a draw!');
    }
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);