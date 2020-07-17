// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import MedicineBoxOutlinedSvg from '@whalue-design/icons-svg/lib/asn/MedicineBoxOutlined';

export default {
  name: 'IconMedicineBoxOutlined',
  displayName: 'MedicineBoxOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: MedicineBoxOutlinedSvg } },
      children,
    ),
};