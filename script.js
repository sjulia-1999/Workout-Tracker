// Referenzen zu den HTML-Sektionen und Elementen
const section1 = document.getElementById('section-1-date-training');
const section2 = document.getElementById('section-2-week');
const section3 = document.getElementById('section-3-exercises');
const historySection = document.getElementById('history-section');

const formDateTraining = document.getElementById('form-date-training');
const formWeek = document.getElementById('form-week');
const formExercises = document.getElementById('form-exercises');

const weekHeaderInfo = document.getElementById('week-header-info');
const exerciseHeaderInfo = document.getElementById('exercise-header-info');
const historyList = document.getElementById('history-list');

const finishWorkoutBtn = document.getElementById('finish-workout-btn');
const showHistoryBtn = document.getElementById('show-history-btn');
const backToMainBtn = document.getElementById('back-to-main-btn');
const backToWeekBtn = document.getElementById('back-to-week-btn'); // Referenz zum Zurück-Button

// Unsere "Datenbank" für die Trainingspläne
let workoutDatabase = {
    'Upper (Strength Focus)': {
        'Woche 1': ['45° Incline Barbell Press', 'Cable Crossover Ladder', 'Wide-Grip Pull-Up', 'High-Cable Lateral Raise', 'Pendlay Deficit Row', 'Overhead Cable riceps Extension (Bar)', 'Bayesian Cable Curl'],
        'Woche 2': ['45° Incline Barbell Press', 'Cable Crossover Ladder', 'Wide-Grip Pull-Up', 'High-Cable Lateral Raise', 'Pendlay Deficit Row', 'Overhead Cable riceps Extension (Bar)', 'Bayesian Cable Curl'],
        'Woche 3': ['45° Incline Barbell Press', 'Cable Crossover Ladder', 'Wide-Grip Pull-Up', 'High-Cable Lateral Raise', 'Pendlay Deficit Row', 'Overhead Cable riceps Extension (Bar)', 'Bayesian Cable Curl'],
        'Woche 4': ['45° Incline Barbell Press', 'Cable Crossover Ladder', 'Wide-Grip Pull-Up', 'High-Cable Lateral Raise', 'Pendlay Deficit Row', 'Overhead Cable riceps Extension (Bar)', 'Bayesian Cable Curl'],
        'Woche 5': ['45° Incline Barbell Press', 'Cable Crossover Ladder', 'Wide-Grip Pull-Up', 'High-Cable Lateral Raise', 'Pendlay Deficit Row', 'Overhead Cable riceps Extension (Bar)', 'Bayesian Cable Curl'],
        'Woche 6': ['45° Incline Barbell Press', 'Pec Deck', 'Dual-Handle Lat Pulldown', 'High-Cable Lateral Raise', 'Smith Machine Row', 'Overhead Cable riceps Extension (Bar)', 'Bayesian Cable Curl'],
        'Woche 7': ['45° Incline Barbell Press', 'Pec Deck', 'Dual-Handle Lat Pulldown', 'High-Cable Lateral Raise', 'Smith Machine Row', 'Overhead Cable riceps Extension (Bar)', 'Bayesian Cable Curl'],
        'Woche 8': ['45° Incline Barbell Press', 'Pec Deck', 'Dual-Handle Lat Pulldown', 'High-Cable Lateral Raise', 'Smith Machine Row', 'Overhead Cable riceps Extension (Bar)', 'Bayesian Cable Curl'],
        'Woche 9': ['45° Incline Barbell Press', 'Pec Deck', 'Dual-Handle Lat Pulldown', 'High-Cable Lateral Raise', 'Smith Machine Row', 'Overhead Cable riceps Extension (Bar)', 'Bayesian Cable Curl'],
        'Woche 10': ['45° Incline Barbell Press', 'Pec Deck', 'Dual-Handle Lat Pulldown', 'High-Cable Lateral Raise', 'Smith Machine Row', 'Overhead Cable riceps Extension (Bar)', 'Bayesian Cable Curl'],
        'Woche 11': ['45° Incline Barbell Press', 'Pec Deck', 'Dual-Handle Lat Pulldown', 'High-Cable Lateral Raise', 'Smith Machine Row', 'Overhead Cable riceps Extension (Bar)', 'Bayesian Cable Curl'],
        'Woche 12': ['45° Incline Barbell Press', 'Pec Deck', 'Dual-Handle Lat Pulldown', 'High-Cable Lateral Raise', 'Smith Machine Row', 'Overhead Cable riceps Extension (Bar)', 'Bayesian Cable Curl'],  
    },
    'Lower (Strength Focus)': {
        'Woche 1': ['Lying Leg Curl', 'Smith Machine Squat', 'Barbell RD', 'Leg Extension', 'Standing Calf Raise','Cable Crunch'],
        'Woche 2': ['Lying Leg Curl', 'Smith Machine Squat', 'Barbell RD', 'Leg Extension', 'Standing Calf Raise','Cable Crunch'],
        'Woche 3': ['Lying Leg Curl', 'Smith Machine Squat', 'Barbell RD', 'Leg Extension', 'Standing Calf Raise','Cable Crunch'],
        'Woche 4': ['Lying Leg Curl', 'Smith Machine Squat', 'Barbell RD', 'Leg Extension', 'Standing Calf Raise','Cable Crunch'],
        'Woche 5': ['Lying Leg Curl', 'Smith Machine Squat', 'Barbell RD', 'Leg Extension', 'Standing Calf Raise','Cable Crunch'],
        'Woche 6': ['Lying Leg Curl', 'Smith Machine Static Lunge w/Elevated Front Foot', '45° Hyperextension', 'Leg Extension', 'Leg Press Calf Press','Machine Crunch'],
        'Woche 7': ['Lying Leg Curl', 'Smith Machine Static Lunge w/Elevated Front Foot', '45° Hyperextension', 'Leg Extension', 'Leg Press Calf Press','Machine Crunch'],
        'Woche 8': ['Lying Leg Curl', 'Smith Machine Static Lunge w/Elevated Front Foot', '45° Hyperextension', 'Leg Extension', 'Leg Press Calf Press','Machine Crunch'],
        'Woche 9': ['Lying Leg Curl', 'Smith Machine Static Lunge w/Elevated Front Foot', '45° Hyperextension', 'Leg Extension', 'Leg Press Calf Press','Machine Crunch'],
        'Woche 10': ['Lying Leg Curl', 'Smith Machine Static Lunge w/Elevated Front Foot', '45° Hyperextension', 'Leg Extension', 'Leg Press Calf Press','Machine Crunch'],
        'Woche 11': ['Lying Leg Curl', 'Smith Machine Static Lunge w/Elevated Front Foot', '45° Hyperextension', 'Leg Extension', 'Leg Press Calf Press','Machine Crunch'],
        'Woche 12': ['Lying Leg Curl', 'Smith Machine Static Lunge w/Elevated Front Foot', '45° Hyperextension', 'Leg Extension', 'Leg Press Calf Press','Machine Crunch'], 
    },
    'Pull (Hypertrophy Focus)': {
        'Woche 1': ['Neutral-Grip Lat Pulldown', 'Chest-Supported Machine Row', 'Neutral-Grip Seated Cable Row', '1-Arm 45° Cable Rear Delt Flye', 'Machine Shrug', 'EZ-Bar Cable Curl', 'Machine Preacher Curl'],
        'Woche 2': ['Neutral-Grip Lat Pulldown', 'Chest-Supported Machine Row', 'Neutral-Grip Seated Cable Row', '1-Arm 45° Cable Rear Delt Flye', 'Machine Shrug', 'EZ-Bar Cable Curl', 'Machine Preacher Curl'],
        'Woche 3': ['Neutral-Grip Lat Pulldown', 'Chest-Supported Machine Row', 'Neutral-Grip Seated Cable Row', '1-Arm 45° Cable Rear Delt Flye', 'Machine Shrug', 'EZ-Bar Cable Curl', 'Machine Preacher Curl'],
        'Woche 4': ['Neutral-Grip Lat Pulldown', 'Chest-Supported Machine Row', 'Neutral-Grip Seated Cable Row', '1-Arm 45° Cable Rear Delt Flye', 'Machine Shrug', 'EZ-Bar Cable Curl', 'Machine Preacher Curl'],
        'Woche 5': ['Neutral-Grip Lat Pulldown', 'Chest-Supported Machine Row', 'Neutral-Grip Seated Cable Row', '1-Arm 45° Cable Rear Delt Flye', 'Machine Shrug', 'EZ-Bar Cable Curl', 'Machine Preacher Curl'],
        'Woche 6': ['Lean-Back Lat Pulldown', 'Chest-Supported T-Bar Row', 'Dual-Handle Elbows-Out Cable Row', '1-Arm 45° Cable Rear Delt Flye', 'Cable Paused Shrug-In', 'Cable Rope Hammer Curl', 'DB Concentration Curl'],
        'Woche 7': ['Lean-Back Lat Pulldown', 'Chest-Supported T-Bar Row', 'Dual-Handle Elbows-Out Cable Row', '1-Arm 45° Cable Rear Delt Flye', 'Cable Paused Shrug-In', 'Cable Rope Hammer Curl', 'DB Concentration Curl'],
        'Woche 8': ['Lean-Back Lat Pulldown', 'Chest-Supported T-Bar Row', 'Dual-Handle Elbows-Out Cable Row', '1-Arm 45° Cable Rear Delt Flye', 'Cable Paused Shrug-In', 'Cable Rope Hammer Curl', 'DB Concentration Curl'],
        'Woche 9': ['Lean-Back Lat Pulldown', 'Chest-Supported T-Bar Row', 'Dual-Handle Elbows-Out Cable Row', '1-Arm 45° Cable Rear Delt Flye', 'Cable Paused Shrug-In', 'Cable Rope Hammer Curl', 'DB Concentration Curl'],
        'Woche 10': ['Lean-Back Lat Pulldown', 'Chest-Supported T-Bar Row', 'Dual-Handle Elbows-Out Cable Row', '1-Arm 45° Cable Rear Delt Flye', 'Cable Paused Shrug-In', 'Cable Rope Hammer Curl', 'DB Concentration Curl'],
        'Woche 11': ['Lean-Back Lat Pulldown', 'Chest-Supported T-Bar Row', 'Dual-Handle Elbows-Out Cable Row', '1-Arm 45° Cable Rear Delt Flye', 'Cable Paused Shrug-In', 'Cable Rope Hammer Curl', 'DB Concentration Curl'],
        'Woche 12': ['Lean-Back Lat Pulldown', 'Chest-Supported T-Bar Row', 'Dual-Handle Elbows-Out Cable Row', '1-Arm 45° Cable Rear Delt Flye', 'Cable Paused Shrug-In', 'Cable Rope Hammer Curl', 'DB Concentration Curl'],
    },
    'Push (Hypertrophy Focus)': {
        'Woche 1': ['Barbell Bench Press', 'Machine Shoulder Press', 'Bottom-Half DB Flye', 'High-Cable Lateral Raise', 'Overhead Cable Triceps Extension (Bar)', 'Cable Triceps Kickback', 'Roman Chair Leg Raise'],
        'Woche 2': ['Barbell Bench Press', 'Machine Shoulder Press', 'Bottom-Half DB Flye', 'High-Cable Lateral Raise', 'Overhead Cable Triceps Extension (Bar)', 'Cable Triceps Kickback', 'Roman Chair Leg Raise'],
        'Woche 3': ['Barbell Bench Press', 'Machine Shoulder Press', 'Bottom-Half DB Flye', 'High-Cable Lateral Raise', 'Overhead Cable Triceps Extension (Bar)', 'Cable Triceps Kickback', 'Roman Chair Leg Raise'],
        'Woche 4': ['Barbell Bench Press', 'Machine Shoulder Press', 'Bottom-Half DB Flye', 'High-Cable Lateral Raise', 'Overhead Cable Triceps Extension (Bar)', 'Cable Triceps Kickback', 'Roman Chair Leg Raise'],
        'Woche 5': ['Barbell Bench Press', 'Machine Shoulder Press', 'Bottom-Half DB Flye', 'High-Cable Lateral Raise', 'Overhead Cable Triceps Extension (Bar)', 'Cable Triceps Kickback', 'Roman Chair Leg Raise'],
        'Woche 6': ['Barbell Bench Press', 'Seated DB Shoulder Press', 'Bottom-Half DB Flye', 'High-Cable Lateral Raise', 'EZ-Bar Skull Crusher', 'Triceps Pressdown (Bar)', 'Ab Wheel Rollout'],
        'Woche 7': ['Barbell Bench Press', 'Seated DB Shoulder Press', 'Bottom-Half DB Flye', 'High-Cable Lateral Raise', 'EZ-Bar Skull Crusher', 'Triceps Pressdown (Bar)', 'Ab Wheel Rollout'],
        'Woche 8': ['Barbell Bench Press', 'Seated DB Shoulder Press', 'Bottom-Half DB Flye', 'High-Cable Lateral Raise', 'EZ-Bar Skull Crusher', 'Triceps Pressdown (Bar)', 'Ab Wheel Rollout'],
        'Woche 9': ['Barbell Bench Press', 'Seated DB Shoulder Press', 'Bottom-Half DB Flye', 'High-Cable Lateral Raise', 'EZ-Bar Skull Crusher', 'Triceps Pressdown (Bar)', 'Ab Wheel Rollout'],
        'Woche 10': ['Barbell Bench Press', 'Seated DB Shoulder Press', 'Bottom-Half DB Flye', 'High-Cable Lateral Raise', 'EZ-Bar Skull Crusher', 'Triceps Pressdown (Bar)', 'Ab Wheel Rollout'],
        'Woche 11': ['Barbell Bench Press', 'Seated DB Shoulder Press', 'Bottom-Half DB Flye', 'High-Cable Lateral Raise', 'EZ-Bar Skull Crusher', 'Triceps Pressdown (Bar)', 'Ab Wheel Rollout'],
        'Woche 12': ['Barbell Bench Press', 'Seated DB Shoulder Press', 'Bottom-Half DB Flye', 'High-Cable Lateral Raise', 'EZ-Bar Skull Crusher', 'Triceps Pressdown (Bar)', 'Ab Wheel Rollout'],
    },
    'Legs (Hypertrophy Focus)': {
        'Woche 1': ['Leg Press', 'Seated Leg Curl', 'DB Bulgarian Split Squat', 'Leg Extension', 'Machine Hip Adduction', 'CMachine Hip Abduction', 'Standing Calf Raise'],
        'Woche 2': ['Leg Press', 'Seated Leg Curl', 'DB Bulgarian Split Squat', 'Leg Extension', 'Machine Hip Adduction', 'CMachine Hip Abduction', 'Standing Calf Raise'],
        'Woche 3': ['Leg Press', 'Seated Leg Curl', 'DB Bulgarian Split Squat', 'Leg Extension', 'Machine Hip Adduction', 'CMachine Hip Abduction', 'Standing Calf Raise'],
        'Woche 4': ['Leg Press', 'Seated Leg Curl', 'DB Bulgarian Split Squat', 'Leg Extension', 'Machine Hip Adduction', 'CMachine Hip Abduction', 'Standing Calf Raise'],
        'Woche 5': ['Leg Press', 'Seated Leg Curl', 'DB Bulgarian Split Squat', 'Leg Extension', 'Machine Hip Adduction', 'CMachine Hip Abduction', 'Standing Calf Raise'],
        'Woche 6': ['Hack Squat', 'Seated Leg Curl', 'Walking Lunge', 'Leg Extension', 'Machine Hip Adduction', 'CMachine Hip Abduction', 'Standing Calf Raise'],
        'Woche 7': ['Hack Squat', 'Seated Leg Curl', 'Walking Lunge', 'Leg Extension', 'Machine Hip Adduction', 'CMachine Hip Abduction', 'Standing Calf Raise'],
        'Woche 8': ['Hack Squat', 'Seated Leg Curl', 'Walking Lunge', 'Leg Extension', 'Machine Hip Adduction', 'CMachine Hip Abduction', 'Standing Calf Raise'],
        'Woche 9': ['Hack Squat', 'Seated Leg Curl', 'Walking Lunge', 'Leg Extension', 'Machine Hip Adduction', 'CMachine Hip Abduction', 'Standing Calf Raise'],
        'Woche 10': ['Hack Squat', 'Seated Leg Curl', 'Walking Lunge', 'Leg Extension', 'Machine Hip Adduction', 'CMachine Hip Abduction', 'Standing Calf Raise'],
        'Woche 11': ['Hack Squat', 'Seated Leg Curl', 'Walking Lunge', 'Leg Extension', 'Machine Hip Adduction', 'CMachine Hip Abduction', 'Standing Calf Raise'],
        'Woche 12': ['Hack Squat', 'Seated Leg Curl', 'Walking Lunge', 'Leg Extension', 'Machine Hip Adduction', 'CMachine Hip Abduction', 'Standing Calf Raise'],
    }
};

let currentWorkout = {
    date: '',
    type: '',
    week: '',
    exercises: []
};

// --- Funktionen für die History ---

function loadHistory() {
    const history = localStorage.getItem('workoutHistory');
    return history ? JSON.parse(history) : [];
}

function saveWorkoutToHistory(workout) {
    const history = loadHistory();
    history.push(workout);
    localStorage.setItem('workoutHistory', JSON.stringify(history));
}

function deleteWorkoutFromHistory(workoutToDelete) {
    let history = loadHistory();
    history = history.filter(workout => 
        !(workout.date === workoutToDelete.date && 
          workout.type === workoutToDelete.type && 
          workout.week === workoutToDelete.week)
    );
    localStorage.setItem('workoutHistory', JSON.stringify(history));
    renderHistory();
}

function renderHistory() {
    const history = loadHistory();
    historyList.innerHTML = '';
    if (history.length === 0) {
        historyList.innerHTML = '<p class="text-center">Noch keine Trainings abgeschlossen.</p>';
        return;
    }

    history.forEach((workout, index) => {
        const workoutCard = document.createElement('div');
        workoutCard.className = 'history-card';
        workoutCard.innerHTML = `
            <h3>${workout.date} - ${workout.type}</h3>
            <p>${workout.week}</p>
            <div class="card-actions">
                <button class="details-btn">Details</button>
                <button class="delete-btn">🗑️ Löschen</button>
            </div>
        `;
        workoutCard.querySelector('.details-btn').addEventListener('click', () => {
            showWorkoutDetails(workout);
        });
        workoutCard.querySelector('.delete-btn').addEventListener('click', () => {
            if (confirm('Möchten Sie dieses Training wirklich löschen?')) {
                deleteWorkoutFromHistory(workout);
            }
        });
        historyList.appendChild(workoutCard);
    });
}

function showWorkoutDetails(workout) {
    historyList.innerHTML = '';
    const detailsHeader = document.createElement('h2');
    detailsHeader.textContent = `Details für das Training am ${workout.date} - ${workout.type}`;
    historyList.appendChild(detailsHeader);
    
    workout.exercises.forEach(exercise => {
        const exerciseCard = document.createElement('div');
        exerciseCard.className = 'history-details-card';
        
        let setsHtml = '';
        if (exercise.sets && exercise.sets.length > 0) {
            exercise.sets.forEach((set, setIndex) => {
                const reps = set.reps !== undefined ? set.reps : 'N/A';
                const weight = set.weight !== undefined ? set.weight : 'N/A';
                setsHtml += `<p><strong>Satz ${setIndex + 1}:</strong> ${reps} Wdh. bei ${weight} kg</p>`;
            });
        } else {
            setsHtml = '<p>Keine Satzdaten vorhanden.</p>';
        }
        
        exerciseCard.innerHTML = `
            <h4>${exercise.name}</h4>
            <p><strong>Notizen:</strong> ${exercise.notes || 'Keine Notizen'}</p>
            ${setsHtml}
        `;
        
        historyList.appendChild(exerciseCard);
    });

    const backToHistoryBtn = document.createElement('button');
    backToHistoryBtn.textContent = 'Zurück zur Historie';
    backToHistoryBtn.className = 'back-btn';
    backToHistoryBtn.addEventListener('click', renderHistory);
    
    historyList.appendChild(backToHistoryBtn);
}


// --- Event-Listener ---

formDateTraining.addEventListener('submit', (e) => {
    e.preventDefault();
    currentWorkout.date = document.getElementById('workout-date').value;
    currentWorkout.type = document.getElementById('workout-type').value;
    weekHeaderInfo.textContent = `Training für "${currentWorkout.type}" am ${currentWorkout.date}`;
    section1.style.display = 'none';
    section2.style.display = 'block';
});

formWeek.addEventListener('submit', (e) => {
    e.preventDefault(); // <-- This line was missing

    currentWorkout.week = document.getElementById('workout-week').value;
    exerciseHeaderInfo.textContent = `Übungen für ${currentWorkout.week} (${currentWorkout.type})`;

    formExercises.innerHTML = '';
    const exercises = workoutDatabase[currentWorkout.type][currentWorkout.week];
    
    exercises.forEach(exercise => {
        const exerciseContainer = document.createElement('div');
        exerciseContainer.className = 'exercise-container';
        exerciseContainer.innerHTML = `
            <h3>${exercise}</h3>
            <input type="text" class="exercise-notes" placeholder="Optionale Notizen..." data-exercise="${exercise}">
            <div id="${exercise.replace(/\s/g, '-')}-sets">
                <div class="set-row">
                    <label>Satz 1:</label>
                    <input type="number" class="set-reps" placeholder="Wdh." required>
                    <input type="number" class="set-weight" placeholder="Gew. (kg)">
                    <button type="button" class="remove-set-btn">🗑️</button>
                </div>
            </div>
            <button type="button" class="add-set-btn" data-exercise="${exercise}">Satz hinzufügen</button>
        `;
        formExercises.appendChild(exerciseContainer);
    });

    section2.style.display = 'none';
    section3.style.display = 'block';
});

formExercises.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-set-btn')) {
        const exerciseName = e.target.dataset.exercise;
        const setsContainer = document.getElementById(`${exerciseName.replace(/\s/g, '-')}-sets`);
        const currentSets = setsContainer.querySelectorAll('.set-row').length;
        
        const newSetRow = document.createElement('div');
        newSetRow.className = 'set-row';
        newSetRow.innerHTML = `
            <label>Satz ${currentSets + 1}:</label>
            <input type="number" class="set-reps" placeholder="Wdh." required>
            <input type="number" class="set-weight" placeholder="Gew. (kg)">
            <button type="button" class="remove-set-btn">🗑️</button>
        `;
        setsContainer.appendChild(newSetRow);
    }
    if (e.target.classList.contains('remove-set-btn')) {
        const setRowToRemove = e.target.closest('.set-row');
        const setsContainer = setRowToRemove.parentElement;
        if (setsContainer.querySelectorAll('.set-row').length > 1) {
            setRowToRemove.remove();
            
            setsContainer.querySelectorAll('.set-row').forEach((row, index) => {
                row.querySelector('label').textContent = `Satz ${index + 1}:`;
            });
        }
    }
});

finishWorkoutBtn.addEventListener('click', () => {
    currentWorkout.exercises = [];
    const exercises = workoutDatabase[currentWorkout.type][currentWorkout.week];
    
    exercises.forEach(exercise => {
        const setsContainer = document.getElementById(`${exercise.replace(/\s/g, '-')}-sets`);
        const setRows = setsContainer.querySelectorAll('.set-row');
        const notes = setsContainer.closest('.exercise-container').querySelector('.exercise-notes').value;
        
        const setsArray = [];
        setRows.forEach(row => {
            const reps = row.querySelector('.set-reps').value;
            const weight = row.querySelector('.set-weight').value;
            setsArray.push({
                reps: reps,
                weight: weight
            });
        });

        currentWorkout.exercises.push({
            name: exercise,
            notes: notes,
            sets: setsArray
        });
    });

    saveWorkoutToHistory(currentWorkout);
    console.log('Abgeschlossenes Workout:', currentWorkout);

    section3.style.display = 'none';
    section1.style.display = 'block';
    
    currentWorkout = { date: '', type: '', week: '', exercises: [] };
    formDateTraining.reset();
});

showHistoryBtn.addEventListener('click', () => {
    renderHistory();
    section1.style.display = 'none';
    historySection.style.display = 'block';
});

// Neuer und korrigierter Code für Ihre script.js
backToWeekBtn.addEventListener('click', () => {
    // Versteckt die Übungs-Sektion (Sektion 3)
    section3.style.display = 'none';
    
    // Zeigt die Start-Sektion (Sektion 1) wieder an
    section1.style.display = 'block';
});

