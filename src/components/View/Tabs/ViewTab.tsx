import { colours } from "../../../data/typeColors"
import { useAppSelector } from "../../../hooks/useAppSelector"
import PokemonCaracteristic from "../../Shared/PokemonCaracteristic"
import { Tab, Tabs } from "../../Shared/Tab"
import PokemonSizeComparator from "../PokemonSizeComparator"
import ProgressBar from "./ProgressBar"

const ViewTab = () => {
  const activePokemon = useAppSelector((state) => state.activePokemon.pokemon)

  return (
    <Tabs
      colorSchema={{
        titleSection: {
          active: {
            backgroundColor: colours[activePokemon!.info.type[0]].background,
            outline: colours[activePokemon!.info.type[0]].type,
          },
        },
      }}
      style={{
        backgroundColor: "white",
        height: "50%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Tab title="Details">
        <p style={{ padding: "10px 0px" }}>
          {activePokemon?.speciesInfo?.description.replaceAll("", "")}
        </p>
        <PokemonCaracteristic
          label="Is Baby"
          value={activePokemon?.speciesInfo?.isBaby.toString()}
        ></PokemonCaracteristic>
        <PokemonCaracteristic
          label="Is Mythical"
          value={activePokemon?.speciesInfo?.isMythical.toString()}
        ></PokemonCaracteristic>
        <PokemonCaracteristic
          label="Is Legendary"
          value={activePokemon?.speciesInfo?.isLegendary.toString()}
        ></PokemonCaracteristic>
        <PokemonCaracteristic
          label="Shape"
          value={activePokemon?.speciesInfo?.shape}
        ></PokemonCaracteristic>
        <PokemonCaracteristic
          label="Category"
          value={activePokemon?.speciesInfo?.category}
        ></PokemonCaracteristic>
        <PokemonCaracteristic
          label="Capture Rate"
          value={activePokemon?.speciesInfo?.captureRate}
        ></PokemonCaracteristic>
        <PokemonCaracteristic
          label="Habitat"
          value={activePokemon?.speciesInfo?.habitat}
        ></PokemonCaracteristic>
      </Tab>
      <Tab title="Base Stats">
        <ProgressBar
          value={activePokemon!.info.baseStats.hp}
          label={"HP"}
          color={colours[activePokemon!.info.type[0]].type}
        ></ProgressBar>
        <ProgressBar
          value={activePokemon!.info.baseStats.attack}
          label={"Attack"}
          color={colours[activePokemon!.info.type[0]].type}
        ></ProgressBar>
        <ProgressBar
          value={activePokemon!.info.baseStats.defense}
          label={"Defense"}
          color={colours[activePokemon!.info.type[0]].type}
        ></ProgressBar>
        <ProgressBar
          value={activePokemon!.info.baseStats.specialAttack}
          label={"Special Attack"}
          color={colours[activePokemon!.info.type[0]].type}
        ></ProgressBar>
        <ProgressBar
          value={activePokemon!.info.baseStats.specialDefense}
          label={"Special Defense"}
          color={colours[activePokemon!.info.type[0]].type}
        ></ProgressBar>
        <ProgressBar
          value={activePokemon!.info.baseStats.speed}
          label={"Speed"}
          color={colours[activePokemon!.info.type[0]].type}
        ></ProgressBar>
      </Tab>

      <Tab title="Breeding">
        <PokemonCaracteristic
          label="Hatch Counter"
          value={activePokemon?.speciesInfo?.hatchCounter}
        ></PokemonCaracteristic>
        <PokemonCaracteristic
          label="Egg Groups"
          value={(activePokemon?.speciesInfo?.eggGroup || []).join(", ")}
        ></PokemonCaracteristic>
        <PokemonCaracteristic
          label="Growth Rate"
          value={activePokemon?.speciesInfo?.growthRate}
        ></PokemonCaracteristic>
      </Tab>
      <Tab title="Size">
        <PokemonSizeComparator></PokemonSizeComparator>
      </Tab>
    </Tabs>
  )
}

export default ViewTab
