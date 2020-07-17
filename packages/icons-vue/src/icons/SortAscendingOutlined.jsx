// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import SortAscendingOutlinedSvg from '@whalue-design/icons-svg/lib/asn/SortAscendingOutlined';

export default {
  name: 'IconSortAscendingOutlined',
  displayName: 'SortAscendingOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SortAscendingOutlinedSvg } },
      children,
    ),
};