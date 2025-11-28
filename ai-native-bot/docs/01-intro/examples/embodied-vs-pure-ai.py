"""
Example: Understanding Embodied AI vs Pure AI
Difficulty: Beginner
Time: 5 minutes
No prerequisites
"""

# Pure Digital AI - No understanding of physics
def pure_ai_command(llm_client, command):
    # LLM processes the command without physical context
    response = llm_client.ask(command)
    return response  # Returns: "I will pick up the box"
    # Problem: LLM doesn't know if it's physically possible in the real world

# Embodied AI - Understands physics through simulation and real-world interaction
def embodied_ai_command(robot_interface, object_name, arm_side="right"):
    # Step 1: Simulate action in a digital twin (Pillar 1: Simulation)
    # The robot 'feels' the weight in simulation
    arm_force_required = robot_interface.simulate_grasp(object=object_name, arm=arm_side)

    # Step 2: Check if physically possible based on robot's capabilities
    max_force_capability = robot_interface.get_max_force(arm=arm_side)
    if arm_force_required > max_force_capability:
        return f"I cannot pick up the {object_name} (it's too heavy for my {arm_side} arm)."

    # Step 3: Execute in the real world (Pillar 2: Control)
    # The robot attempts the grasp
    robot_interface.grasp(object=object_name, arm=arm_side)

    # Step 4: Get real-world feedback (Pillar 2: Perception)
    feedback = robot_interface.check_success()

    return feedback  # Real result: success, failure, or partial success
