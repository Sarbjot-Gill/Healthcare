import pandas as pd
import sys
import json
def search_diseases_by_symptoms(csv_file, symptoms):
    df = pd.read_csv(csv_file)
    symptoms = [symptom.strip().lower() for symptom in symptoms]
    
    matched_diseases = set()
    
    for index, row in df.iterrows():
        
        disease_symptoms = row.iloc[1:].dropna().apply(lambda x: x.strip().lower()).tolist()
        
        
        if all(symptom in disease_symptoms for symptom in symptoms):
            matched_diseases.add(row['Disease'])
    
    
    return list(matched_diseases)


if __name__ == "__main__":
    
    csv_file = 'dataset.csv'
    
    data = sys.argv[1]
    # user_input = input("Enter symptoms separated by commas: ")
    user_input = data
    symptoms = [symptom.strip() for symptom in user_input.split(',')]
    
    
    results = search_diseases_by_symptoms(csv_file, symptoms)
   
    
    if results:
        print(results)
    else:
        print("None")
